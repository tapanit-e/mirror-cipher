# Mirror cipher (experimental)
An experimental stream cipher algorithm that provides [information-theoretic security.](https://en.wikipedia.org/wiki/Information-theoretic_security)

The algorithm counts the string distance between the plain text and the key and then mirrors the distance by the key to generate the cipher. The generated cipher provides no information about the plain text.
