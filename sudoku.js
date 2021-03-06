function sudoku(a,b,c,d,e,f,g,h,i) {
	/*Sodoku
	Genera sudoku llamando a la funcion sudoku(parametro,numeros del 1 al 9)
	-sintanxis sudoku(a,b,c,d,e,f,g,h,i)
	-Errores 
		-1.si se introduce numeros de 2 o mas digitos 
		-2.si se repite uno o mas digitos en parametro EJ:sudoku(1,2,3,4,5,6,7,8,3) Incorrecto

	-2019 Usiel rivas */
	this.a=a ;
	this.b=b ;
	this.c=c ;
	this.d=d ;
	this.e=e ;
	this.f=f ;
	this.g=g ;
	this.h=h ;
	this.i=i ;
//primera linea
var casillas1=document.getElementsByTagName('input')[0].value=a
var casillas2=document.getElementsByTagName('input')[1].value=b
var casillas3=document.getElementsByTagName('input')[2].value=c

var casillas4=document.getElementsByTagName('input')[3].value=d
var casillas5=document.getElementsByTagName('input')[4].value=e
var casillas6=document.getElementsByTagName('input')[5].value=f

var casillas7=document.getElementsByTagName('input')[6].value=g
var casillas8=document.getElementsByTagName('input')[7].value=h
var casillas9=document.getElementsByTagName('input')[8].value=i

//segunda linea
var casillas10=document.getElementsByTagName('input')[9].value=d
var casillas11=document.getElementsByTagName('input')[10].value=e
var casillas12=document.getElementsByTagName('input')[11].value=f

var casillas13=document.getElementsByTagName('input')[12].value=g
var casillas14=document.getElementsByTagName('input')[13].value=h
var casillas15=document.getElementsByTagName('input')[14].value=i

var casillas16=document.getElementsByTagName('input')[15].value=a
var casillas17=document.getElementsByTagName('input')[16].value=b
var casillas18=document.getElementsByTagName('input')[17].value=c

//tercera linea
var casillas19=document.getElementsByTagName('input')[18].value=g
var casillas20=document.getElementsByTagName('input')[19].value=h
var casillas21=document.getElementsByTagName('input')[20].value=i

var casillas22=document.getElementsByTagName('input')[21].value=a
var casillas23=document.getElementsByTagName('input')[22].value=b
var casillas24=document.getElementsByTagName('input')[23].value=c

var casillas25=document.getElementsByTagName('input')[24].value=d
var casillas26=document.getElementsByTagName('input')[25].value=e
var casillas27=document.getElementsByTagName('input')[26].value=f

//cuarta linea
var casillas28=document.getElementsByTagName('input')[27].value=c
var casillas29=document.getElementsByTagName('input')[28].value=a
var casillas30=document.getElementsByTagName('input')[29].value=b

var casillas31=document.getElementsByTagName('input')[30].value=f
var casillas32=document.getElementsByTagName('input')[31].value=d
var casillas33=document.getElementsByTagName('input')[32].value=e

var casillas34=document.getElementsByTagName('input')[33].value=i
var casillas35=document.getElementsByTagName('input')[34].value=g
var casillas36=document.getElementsByTagName('input')[35].value=h

//quinta linea
var casillas37=document.getElementsByTagName('input')[36].value=f
var casillas38=document.getElementsByTagName('input')[37].value=d
var casillas39=document.getElementsByTagName('input')[38].value=e

var casillas40=document.getElementsByTagName('input')[39].value=i
var casillas41=document.getElementsByTagName('input')[40].value=g
var casillas42=document.getElementsByTagName('input')[41].value=h

var casillas43=document.getElementsByTagName('input')[42].value=c
var casillas44=document.getElementsByTagName('input')[43].value=a
var casillas45=document.getElementsByTagName('input')[44].value=b

//sexta linea
var casillas46=document.getElementsByTagName('input')[45].value=i
var casillas47=document.getElementsByTagName('input')[46].value=g
var casillas48=document.getElementsByTagName('input')[47].value=h

var casillas49=document.getElementsByTagName('input')[48].value=c
var casillas50=document.getElementsByTagName('input')[49].value=a
var casillas51=document.getElementsByTagName('input')[50].value=b

var casillas52=document.getElementsByTagName('input')[51].value=f
var casillas53=document.getElementsByTagName('input')[52].value=d
var casillas54=document.getElementsByTagName('input')[53].value=e

//septima linea
var casillas55=document.getElementsByTagName('input')[54].value=b
var casillas56=document.getElementsByTagName('input')[55].value=c
var casillas57=document.getElementsByTagName('input')[56].value=a

var casillas58=document.getElementsByTagName('input')[57].value=e
var casillas59=document.getElementsByTagName('input')[58].value=f
var casillas60=document.getElementsByTagName('input')[59].value=d

var casillas61=document.getElementsByTagName('input')[60].value=h
var casillas62=document.getElementsByTagName('input')[61].value=i
var casillas63=document.getElementsByTagName('input')[62].value=g

//octava linea
var casillas64=document.getElementsByTagName('input')[63].value=e
var casillas65=document.getElementsByTagName('input')[64].value=f
var casillas66=document.getElementsByTagName('input')[65].value=d

var casillas67=document.getElementsByTagName('input')[66].value=h
var casillas68=document.getElementsByTagName('input')[67].value=i
var casillas69=document.getElementsByTagName('input')[68].value=g

var casillas70=document.getElementsByTagName('input')[69].value=b
var casillas71=document.getElementsByTagName('input')[70].value=c
var casillas72=document.getElementsByTagName('input')[71].value=a

//novena linea
var casillas73=document.getElementsByTagName('input')[72].value=h
var casillas74=document.getElementsByTagName('input')[73].value=i
var casillas75=document.getElementsByTagName('input')[74].value=g

var casillas76=document.getElementsByTagName('input')[75].value=b
var casillas77=document.getElementsByTagName('input')[76].value=c
var casillas78=document.getElementsByTagName('input')[77].value=a

var casillas79=document.getElementsByTagName('input')[78].value=e
var casillas80=document.getElementsByTagName('input')[79].value=f
var casillas81=document.getElementsByTagName('input')[80].value=d


}

