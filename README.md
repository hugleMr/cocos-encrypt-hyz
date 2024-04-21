# hyz-encript
cocoscreator encryption obfuscation is written based on 2.4.5. It is theoretically suitable for engine 2.4.0-2.4.6.
The most important thing is that it is open source.
![Screenshot 2024-04-22 010946](https://github.com/hugleMr/cocos-encrypt-hyz/assets/10258615/55c7783c-6d14-4ebc-a27f-cbcb661c0969)

Function:
- **web client** supports encrypted images, text, and json
- **native side** supports encryption of all resources except audio
- Support file name obfuscation

**Encryption ideas:**
Encryption is the simplest XOR encryption. Modify the built source code to decrypt. The native side is to modify the file reading function of CCFileUtil on the c++ side, and the web side is to modify the download series methods of cocos2d-jsb.js.

**File name modification ideas:**
Extract the file name and rename it to the md5 code of the file name; then modify the transformUrl function before downloading the resource,
The local file name is also calculated as md5 and redirected;

**How to use:**
It must be built first. Currently, jsb-link, web-mobile, and web-desktop are supported. Then open the plug-in, select the corresponding construction method, fill in the encryption signature and secret key, and click the encryption button.

