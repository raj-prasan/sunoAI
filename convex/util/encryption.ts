const ALGORITHM = "AES-GCM";
const KEY_LENGTH = 256;

async function getCryptoKey() {
  const secret = process.env.JOURNAL_SECRET;
  if (!secret) {
    throw new Error("JOURNAL_SECRET environment variable is not set");
  }

  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "PBKDF2" },
    false,
    ["deriveKey"],
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode("convex-journal-salt"), // Fixed salt for deterministic key derivation from strict secret
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: ALGORITHM, length: KEY_LENGTH },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function encrypt(text: string): Promise<string> {
  const key = await getCryptoKey();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();
  const encoded = encoder.encode(text);

  const encrypted = await crypto.subtle.encrypt(
    { name: ALGORITHM, iv },
    key,
    encoded,
  );

  // Combine IV and ciphertext for storage
  const ivArray = Array.from(iv);
  const encryptedArray = Array.from(new Uint8Array(encrypted));

  // Return as JSON string of byte arrays to be safe and portable
  return JSON.stringify({ iv: ivArray, data: encryptedArray });
}

export async function decrypt(encryptedString: string): Promise<string> {
  try {
    // Attempt to parse as our encrypted JSON format
    const { iv, data } = JSON.parse(encryptedString);

    // If not in our format, it might be legacy plain text
    if (!iv || !data || !Array.isArray(iv) || !Array.isArray(data)) {
      return encryptedString;
    }

    const key = await getCryptoKey();
    const ivArray = new Uint8Array(iv);
    const dataArray = new Uint8Array(data);

    const decrypted = await crypto.subtle.decrypt(
      { name: ALGORITHM, iv: ivArray },
      key,
      dataArray,
    );

    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  } catch (error) {
    // Fallback: If decryption fails (e.g. JSON parse error or decrypt error),
    // assume it's plain text (backward compatibility)
    console.error("Decryption failed, returning original text:", error);
    return encryptedString;
  }
}
