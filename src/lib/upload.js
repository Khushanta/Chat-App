export const upload = async (file) => {
    return new Promise(async (resolve, reject) => {
        const url = "https://api.cloudinary.com/v1_1/dnzfuquv3/upload"; // your cloud name
        const formData = new FormData();
        const folderName = "chat_photos"
        const timestampedFileName = `${Date.now()}-${file.name}`;
        formData.append("file", file);
        formData.append("upload_preset", "Chatappunsigned");
        formData.append("public_id", `${folderName}/${timestampedFileName}`); // now used
 // your unsigned preset

        const xhr = new XMLHttpRequest();

        xhr.open("POST", url);

        xhr.upload.addEventListener("progress", (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                console.log("Upload is " + progress.toFixed(2) + "% done");
            }
        });

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const result = JSON.parse(xhr.responseText);
                    console.log("Uploaded image URL:", result.secure_url);
                    resolve(result.secure_url);
                } else {
                    console.error("Upload failed", xhr.responseText);
                    reject(new Error("Cloudinary upload failed"));
                }
            }
        };

        xhr.send(formData);
    });
};

export default upload;
