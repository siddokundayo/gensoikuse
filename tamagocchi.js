  //値の取得処理
let study;if(localStorage.getItem('study') == null) {study=0;}else{study =Number(localStorage.getItem('study'));document.getElementById('study').textContent = study;}
let play;if(localStorage.getItem('play') == null) {play=0;}else{play =Number(localStorage.getItem('play'));document.getElementById('play').textContent = play;}
let moving;if(localStorage.getItem('moving') == null) {moving=0;}else{moving =Number(localStorage.getItem('moving'));document.getElementById('moving').textContent = moving;}
let oldday;if(localStorage.getItem('day') == null) {oldday=0;}else{oldday =Number(localStorage.getItem('day'));}
let stamina;if(localStorage.getItem('stamina') == null) {stamina=33;}else{stamina =Number(localStorage.getItem('stamina'));document.getElementById('stamina').textContent = stamina;}

let date = new Date();let day = date.getDate();
if(day != oldday){stamina=33}




function studybuttonclick(){//勉強ボタン押す
    if(stamina>0){study=study+3;play--;moving--;stamina--;document.getElementById('log').textContent = 'お勉強した!';}
    else{stamina=0;alert('つかれた・・・')}
    document.getElementById('stamina').textContent = stamina;
    document.getElementById('study').textContent = study;
    document.getElementById('play').textContent = play;
    document.getElementById('moving').textContent = moving;
}

function playbuttonclick(){//遊ぶボタン押す
    if(stamina>0){play=play+3;study--;moving--;stamina--;document.getElementById('log').textContent = 'ゲームした!';}
    else{stamina=0;alert('つかれた・・・')}
    document.getElementById('stamina').textContent = stamina;
    document.getElementById('study').textContent = study;
    document.getElementById('play').textContent = play;
    document.getElementById('moving').textContent = moving;
}

function movingbuttonclick(){//運動ボタン押す
    if(stamina>0){moving=moving+3;play--;study--;stamina--;document.getElementById('log').textContent = '運動した!';}
    else{stamina=0;alert('つかれた・・・')}
    document.getElementById('stamina').textContent = stamina;
    document.getElementById('study').textContent = study;
    document.getElementById('play').textContent = play;
    document.getElementById('moving').textContent = moving;
}
function save(){//セーブする
localStorage.setItem('study',Number(study));
localStorage.setItem('play',Number(play));
localStorage.setItem('moving',Number(moving));
localStorage.setItem('day',Number(day));
localStorage.setItem('stamina',Number(stamina));

if(moving<-10){document.getElementById("pic").style.transform= "scale(2.0, 1.0)"}
else{document.getElementById("pic").style.transform= "scale(1.0, 1.0)"}
if(play<-10){document.getElementById("pic").style.filter= "invert(100%)"}
else{document.getElementById("pic").style.filter= ""}

if(study>10 && play<=10 && moving<=10){document.getElementById('status').textContent = 'がりべん';document.getElementById("pic").src="gariben.png"}
else if(play>10 && study<=10 && moving<=10){document.getElementById('status').textContent = 'げーまー';document.getElementById("pic").src="gamer.png"}
else if(moving>10 && study<=10 && play<=10){document.getElementById('status').textContent = 'がんばりや';document.getElementById("pic").src="ganbariya.png"}
else if(play>10 && study>10 && moving<=10){document.getElementById('status').textContent = 'だいがくせー';document.getElementById("pic").src="daigakusei.png"}
else if(play>10 && moving>10 && study<=10){document.getElementById('status').textContent = 'うぇいけー';document.getElementById("pic").src="weikei.png"}
else if(study>10 && moving>10 && play<=10){document.getElementById('status').textContent = 'しゃちく';document.getElementById("pic").src="shatiku.png"}
else if(play>10 && study>10 && moving>10){document.getElementById('status').textContent = 'しゃちょーさん';document.getElementById("pic").src="syacho.png";}
else{document.getElementById('status').textContent = ':|';document.getElementById("pic").src="neutral.png";
}
if(study<0 && play>=0 && moving>=-10){document.getElementById('badstatus').textContent = 'ばか';document.getElementById("subpic").src="baka.png"}
else if(play<-10 && study>=-10 && moving>=-10){document.getElementById('badstatus').textContent = 'うつ';document.getElementById("subpic").src="utu.png"}
else if(moving<-10 && play>=-10 && study>=-10){document.getElementById('badstatus').textContent = 'でぶ';}
else if(study<-10 && play<-10 && moving>=-10){document.getElementById('badstatus').textContent = 'さけかす';document.getElementById("subpic").src="sakekasu.png"}
else if(study<-10 && moving<-10 && play>=-10){document.getElementById('badstatus').textContent = 'にーと';document.getElementById("subpic").src="niito.png"}
else if(play<-10 && moving<-10 && study>=-10){document.getElementById('badstatus').textContent = 'せーかつしゅーかんびょー'}
else if(play<-10 && moving<-10 && study<-10){document.getElementById('badstatus').textContent = 'むてきマン'}
else{document.getElementById('badstatus').textContent = ':)';document.getElementById("subpic").src=""}
}

function dataclear(){
    stamina=33;
    study=0;
    play=0;
    moving=0;
    localStorage.setItem('study',0);
    localStorage.setItem('play',0);
    localStorage.setItem('moving',0);
    document.getElementById('stamina').textContent = stamina;
    document.getElementById('moving').textContent = moving;
    document.getElementById('play').textContent = play;
    document.getElementById('study').textContent = study;
}

function heal(){
    stamina++;
    document.getElementById('stamina').textContent = stamina;
}



