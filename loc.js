function procureLoc(){
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        map.innerHTML ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.6626667227124!2d-49.885227925775894!3d-22.962647339867733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c019b0fcc8a557%3A0x7b949691795493f5!2sEscola%20SENAI%20Ourinhos!5e0!3m2!1spt-BR!2sbr!4v1693593542334!5m2!1spt-BR!2sbr" width=1500px   height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> '+latitude+','+longitude+'&amp;z=15amp;output=embed"></iframe>';
    });
    
}

const hospitais = {
    "Centro de Saúde": "R. Venceslau Braz, 38 - Vila Mano, Ourinhos - SP, 19912-060",
    "UBS Caic": "Rua Maria Pucinelli Pelegrini, 590 - Jardim Anchieta, Ourinhos - SP, 19915-040",
    "UBS Cohab": "R. Luís Nogueira, 310 - Conj. Res. Padre Eduardo Murante, Ourinhos - SP, 19905-360",
    "UBS Jardim Itamaraty": "Rua Av. Maria, R. Maria Paulina Melchior da Silva, 128 - Jardim Itamaraty, Ourinhos - SP, 19904-260",
    "UPA": "R. Celestino Lopes Bahia, 545 - Vila Sao Luiz, Ourinhos - SP, 19911-205",
    "UBS Vila Margarida": "R. Abuassali Abujamra, 410 - Vila Margarida, Ourinhos - SP, 19907-170",
}