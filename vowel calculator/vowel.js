function CheckVowels()
{
let text = document.getElementById("inputText").value;
let vowelcount = 0;
text = text.toLowerCase();
for(let i = 0;i < text.length; i++)
{
    let char = text.charAt(i);
    if(isvowel(char))
    {
        vowelcount++;
    }
}
const result = document.getElementById('result');
result.textContent = "Total Vowels: "+ vowelcount;

}
function isvowel(char)
{
    const vowels = ["a","e","i","o","u","A","E","I","O","U"];
    return vowels.includes(char);
}