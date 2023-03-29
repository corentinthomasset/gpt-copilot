import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: import.meta.env.VITE_OPENAI_ORG_ID,
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("Copilot GPT is ready 👍");
document.addEventListener('keydown', (e) => {
    if (e.key !== "Backspace") {
        let value = e.target.value || e.target.innerText
        const attrKey = e.target.value ? "value" : "innerText"
        if (value.match("@gpt")) {
            value = value.replace(/@gpt.*/, "")
            e.target[attrKey] = value
            
            let i = 0
            const loader = ["■   ", " ■  ", "  ■ ", "   ■", "  ■ ",  " ■  "] 
            const loading = setInterval(() => {
                e.target[attrKey] = value + " " + loader[i % 6] + " "
                i++
            }, 100)
            openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{"role": "user", "content": value}],
              }).then(completion => {
                clearInterval(loading)
                let result = completion.data.choices[0].message.content.trim().split("")
                e.target[attrKey] = ""
                const interval = setInterval(() => {
                    if(result.length) {
                        e.target[attrKey] += result.shift()
                    } else {
                        clearInterval(interval)
                    }
                }, 50)
              }).catch(e => {
                console.log(e)
              })
        }
    }
})