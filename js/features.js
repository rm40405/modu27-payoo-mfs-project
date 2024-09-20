document.getElementById('case-from-btn').addEventListener('click', function(){
    document.getElementById('case-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');



});

document.getElementById('add-money-from-btn').addEventListener('click', function(){
    document.getElementById('add-money-from').classList.remove('hidden');
    document.getElementById('case-from').classList.add('hidden');
});