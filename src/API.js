export default async function (message) {
    return await fetch("https://api.aicloud.sbercloud.ru/public/v1/public_inference/gpt3/predict", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "text": message,
        }),
    }).then(r => r.json());

}