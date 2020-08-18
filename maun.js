const people =[
    {name: 'acne', link: 'adsa'},{name: 'ankle swelling'},{name: 'anxiety'},
    {name: 'appendix pain'},{name: 'asthma'},{name: 'bad breathe from mouth'},
    {name: 'bed wetting'},{name: 'burning sole'},{name: 'cervical'},
    {name: 'cholestrol'},{name: 'constipation'},{name: 'cough'},
    {name: 'cramps in cough muscle'},{name: 'depression'},{name: 'detoxification'},
    {name: 'diabetes'},{name: 'dizziness'},
    {name: 'exessive anger'},{name: 'elbow pain'},{name: 'excess bleeding during menses'},
    {name: 'facial hair'},{name: 'fatty liver'},{name: 'frozen shoulder'},
    {name: 'hair fall'},{name: 'hard of hearing'},{name: 'heel pain'},
    {name: 'high bp'},{name: 'hip joint pain'},{name: 'irritable bowel syndrome'},
    {name: 'kidney problems'},{name: 'knee pain'},{name: 'lack of appetite'},
    {name: 'low bp'},{name: 'lower back pain'},{name: 'memory of concentration'},
    {name: 'migrain'},{name: 'mouth ulcer'},{name: 'navel displacement'},
    {name: 'nose bleeding'},{name: 'nose block'},{name: 'numbness in leg'},
    {name: 'obesity'},{name: 'ovary cyst(pcod)'},{name: 'painfull menses'},
    {name: 'paralysis'},{name: 'parkinson'},{name: 'piles'},
    {name: 'premature ejacuation'},{name: 'sinus'},{name: 'skin problems'},
    {name: 'slip disc'},{name: 'sweating palm'},{name: 'tail bone pain'},
    {name: 'tinnitus'},{name: 'tounge ulcer'},{name: 'uric acid'},
    {name: 'uterus fibroid'},{name: 'varicose veins'},{name: 'weak eye sight'},

];


const list=document.getElementById('list');

function setList(group){
    clearList();
    for (const person of group){
        const item=document.createElement('li');
        const text=document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if(group.length==0){
        setNoResult();
    }
}

function clearList(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
}

function setNoResult(){
    const item=document.createElement('li');
    const text=document.createTextNode('No result found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value,searchTerm){
    if(value===searchTerm){
        return 2;
    }else if(value.startsWith(searchTerm)){
        return 1;

    }else{
        return 0;
    }
}


const searchInput=document.getElementById("sea");

searchInput.addEventListener('input' ,(event) =>{
    let value=event.target.value;
    if (value && value.trim().length >0){
        vlue=value.trim().toLowerCase();
        setList(people.filter(person => {
            return person.name.includes(value);
        }).sort((personA,personB)=> {
            return getRelevancy(personB.name,value) - getRelevancy(personA.name,value);
        })  );
    }else{
        clearList();
    }
});