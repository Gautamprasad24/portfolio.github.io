const steps = Array.from(document.querySelectorAll('form .step'));

const prevbtn = document.querySelectorAll('form .prev-btn')
const nextbtn = document.querySelectorAll('form .next-btn')

const form = document.querySelector('form')


   
    nextbtn.forEach(button => {
        button.addEventListener('click', ()=>{
           Changestep('next')
        });
    });
    //Prev button
    prevbtn.forEach(button => {
        button.addEventListener('click', ()=>{
           Changestep('prev')
        });
    });





    function Changestep(btn)
    {
        const active = document.querySelector('.active');
        let index = steps.findIndex(step => step === active)

        if(index >= 0){
            steps[index].classList.remove('active')
            if(btn === 'next')
            {
            index ++
            }
            else if(btn === 'prev')
            {
                index --
            }
            if(index > 0 && index < steps.length)
            {
            steps[index].classList.add('active')
                
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = document.querySelector('input[name="name"]').value
        const email = document.querySelector('input[name="email"]').value
        const phone = document.querySelector('input[name="phone"]').value
        if (name === ''|| email === '' || phone ==='')
        {
            alert('Fill the form please')
        }
        else
        {
            document.write(`Hello Welcome ${name}\n Your Email Id is :- ${email} \n Your Phone Number is:- ${phone}`)
        }

        
    })