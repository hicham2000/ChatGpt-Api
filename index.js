import axios from 'axios'
import readline from 'readline'
async function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

axios.defaults.headers.common['Authorization'] = 'Bearer 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'


while(1) {
    console.log('\n'+'-----------------------------------------------------------')
    const prompt  = await askQuestion("Prompt> ")
    console.log('Sending request...')
    await axios.post('https://api.openai.com/v1/completions',
        {"model": "text-davinci-003", "prompt": prompt, "temperature": 0.7, "max_tokens": 1900}
    ).then(res => {
        console.log(res.data.choices[0].text)
    }).catch(err => {
        console.log("Error: ", {err})
    })
}