const crypto = require('crypto');

// Encryption configuration
const algorithm = 'aes-256-ctr';
const secretKey = process.env.SECRET_KEY; // Use environment variable in production
const iv = crypto.randomBytes(16);

// Encryption function
const encrypt = (text) => {
  if (!text) return null;
  
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  
  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
  };
};

// Decryption function
const decrypt = (hash) => {
  if (!hash) return null;
  
  const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
  
  return decrypted.toString();
};

module.exports = {
  encrypt,
  decrypt
};