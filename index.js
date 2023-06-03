/* Первая задача */

let out_academic_performance = document.getElementById('out_academic_performance');
let out_two = document.getElementById('out_two');
const mas_people = ['Марков К. И.', 'Меркулов В. Я.', 'Денисов А. Ю.', 'Еремина А. М.', 'Иванова К. А.', 'Давыдов Ю. П.', 'Соловьева М. М.', 'Козлов А. К.', 'Новиков С. М.', 'Туманова В. А.'];
const mas_rating = [];
let max = 5;
let min = 2;
let str_academic_performance = ' ';
let str_two = ' ';

for(let i = 0, j = 0; i < mas_people.length; i++, j++){
	mas_rating[i] = Math.floor(Math.random() * (max - min + 1) + min);
	str_academic_performance += mas_people[i] + " - " + mas_rating[j] + '<br>';
	if(mas_rating[j] == 2){
		str_two += mas_people[i] + " - " + mas_rating[j] + '<br>';
	}
}

if(mas_rating.includes(2) == false){
	str_two = "Студентов с двойками нет!";
}

out_academic_performance.innerHTML = str_academic_performance;
out_two.innerHTML = str_two;



/* Вторая задача */
const photo = ['img/nissan-terrano.jpg', 'img/grand-vitara.jpg', 'img/mitsubishi-pajero.jpg'];
const car_name = ['Nissan Terrano', 'Grand Vitara', 'Mitsubishi Pajero'];
const characteristics = [
	'Обновленная версия «Террано» вышла в 2014 году и с тех пор заслужила положительные отзывы владельцев за надежность и проходимость. Автомобиль солиден и внешне привлекателен, конструкция – несущий (безрамный) кузов. 210 мм клиренса позволяют ему справляться со сложными ландшафтами.', 
	
	'Достоинством Grand Vitara коллективный разум считает выносливость и надежность. У автомобиля не так уж много врожденных болячек. У моторов, обычно двухлитрового, к 150 тысячам километров растягивается цепь ГРМ, особенно если владелец не уследил за уровнем масла. Нередко выходит из строя механизм ролика-натяжителя ремня навесного оборудования, так что опытные витаровладельцы рекомендуют всегда иметь с собой запасные ремни и ролики.',
	
	'Несомненным преимуществом является брутальный внешний вид, выделяющий его на дорогах среди остального потока машин. Дизайн продуман таким образом, чтобы не было ничего лишнего для сохранения классического аристократичного стиля внедорожников.Является идеальным вариантом для путешествий. Благодаря складывающимся сиденьям можно без каких-либо трудностей устроить себе удобное спальное место, позволяющее спать во весь рост. А для перевозки крупногабаритных грузов предусмотрена дополнительная установка багажника на крыше.Базовая комплектация оснащена всем необходимым для полноценного комфортного вождения и находится на высоком уровне. Оборудование продумано до мелочей, поэтому за более дорогую комплектацию можно не переплачивать.'
];

let img_car = document.getElementById('img_car');
let text_car_name = document.getElementById('text_car_name');
let text_car_characteristics = document.getElementById('text_car_characteristics');
let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
btn_right.onclick = f_right;
btn_left.onclick = f_left;
let index_car = 0;

function f_right(){
	index_car += 1;
	if(index_car == photo.length){
		index_car = 0; 
	}
	f_car_information();
}

function f_left(){
	index_car -= 1;
	if(index_car == -1){
		index_car = photo.length-1; 
	}
	f_car_information();
}

function f_car_information(){
	img_car.src = photo[index_car];	
	text_car_name.innerText = car_name[index_car]
	text_car_characteristics.innerText = characteristics[index_car];
}
