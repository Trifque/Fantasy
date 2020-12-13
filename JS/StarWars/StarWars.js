$(
    function()
    {
    $("#RegrutujCarstvo").validate
    (
       {
           rules:
           {
               ime:
               {
                   required: true, 
                   nowhitespace: true,
                   lettersonly: true
               },
               prezime:
               {
                   required: true,
                   nowhitespace: true,
                   lettersonly: true
               },
               godine:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               visina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               tezina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               iskustvo:
               {
                   required: true
               }

           },
           messages:
           {
                ime:
                {
                    required:'Molimo Vas da unesete Vase ime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                prezime:
                {
                    required:'Molimo vas unesite Vase prezime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                godine:
                {
                    required:'Molimo Vas da unesete Vase godine!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                visina:
                {
                    required:'Molimo Vas da unesete Vasu visinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                tezina:
                {
                    required:'Molimo Vas da unesete Vasu tezinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                iskustvo:
                {
                    required:'Molimo Vas da odaberete opciju'
                }
           }
       }
    );

    $("#RegrutujPobunjenike").validate
    (
       {
           rules:
           {
               ime:
               {
                   required: true, 
                   nowhitespace: true,
                   lettersonly: true
               },
               prezime:
               {
                   required: true,
                   nowhitespace: true,
                   lettersonly: true
               },
               godine:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               visina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },
               tezina:
               {
                   required: true,
                   nowhitespace: true,
                   digits: true
               },

           },
           messages:
           {
                ime:
                {
                    required:'Molimo Vas da unesete Vase ime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                prezime:
                {
                    required:'Molimo vas unesite Vase prezime!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    lettersonly:'Molimo Vas da unesete samo slova bez ikakvih znakova'
                },
                godine:
                {
                    required:'Molimo Vas da unesete Vase godine!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                visina:
                {
                    required:'Molimo Vas da unesete Vasu visinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
                tezina:
                {
                    required:'Molimo Vas da unesete Vasu tezinu!',
                    nowhitespace:'Molimo Vas da bude bez razmaka',
                    digits:'Molimo Vas da unesete validan broj (samo broj, a ne i mernu jedinicu)'
                },
           }
       }
    );

}


);


function pokazicarstvo()
{
    let carstvo = document.getElementById("RegrutujCarstvo");
    carstvo.style.display= "flex";
    let pobunjenici = document.getElementById("RegrutujPobunjenike");
    pobunjenici.style.display= "none";
}

function pokazipobunjenike()
{
    let pobunjenici = document.getElementById("RegrutujPobunjenike");
    pobunjenici.style.display= "flex";
    let carstvo = document.getElementById("RegrutujCarstvo");
    carstvo.style.display= "none";
}

function prikazirasu1()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "flex";
    rasa2.style.display = "none";
    rasa3.style.display = "none";
    rasa4.style.display = "none";
    rasa5.style.display = "none";
    rasa6.style.display = "none";
    rasa7.style.display = "none";
    rasa8.style.display = "none";
}

function prikazirasu2()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "flex";
    rasa3.style.display = "none";
    rasa4.style.display = "none";
    rasa5.style.display = "none";
    rasa6.style.display = "none";
    rasa7.style.display = "none";
    rasa8.style.display = "none";
}

function prikazirasu3()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "none";
    rasa3.style.display = "flex";
    rasa4.style.display = "none";
    rasa5.style.display = "none";
    rasa6.style.display = "none";
    rasa7.style.display = "none";
    rasa8.style.display = "none";
}

function prikazirasu4()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "none";
    rasa3.style.display = "none";
    rasa4.style.display = "flex";
    rasa5.style.display = "none";
    rasa6.style.display = "none";
    rasa7.style.display = "none";
    rasa8.style.display = "none";
}

function prikazirasu5()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "none";
    rasa3.style.display = "none";
    rasa4.style.display = "none";
    rasa5.style.display = "flex";
    rasa6.style.display = "none";
    rasa7.style.display = "none";
    rasa8.style.display = "none";
}

function prikazirasu6()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "none";
    rasa3.style.display = "none";
    rasa4.style.display = "none";
    rasa5.style.display = "none";
    rasa6.style.display = "flex";
    rasa7.style.display = "none";
    rasa8.style.display = "none";
}

function prikazirasu7()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "none";
    rasa3.style.display = "none";
    rasa4.style.display = "none";
    rasa5.style.display = "none";
    rasa6.style.display = "none";
    rasa7.style.display = "flex";
    rasa8.style.display = "none";
}

function prikazirasu8()
{
    let rasa1 = document.getElementById("rasa1");
    let rasa2 = document.getElementById("rasa2");
    let rasa3 = document.getElementById("rasa3");
    let rasa4 = document.getElementById("rasa4");
    let rasa5 = document.getElementById("rasa5");
    let rasa6 = document.getElementById("rasa6");
    let rasa7 = document.getElementById("rasa7");
    let rasa8 = document.getElementById("rasa8");
    rasa1.style.display = "none";
    rasa2.style.display = "none";
    rasa3.style.display = "none";
    rasa4.style.display = "none";
    rasa5.style.display = "none";
    rasa6.style.display = "none";
    rasa7.style.display = "none";
    rasa8.style.display = "flex";
}