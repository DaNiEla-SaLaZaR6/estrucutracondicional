// ejercico 1
let num1,num2=0
num1=parseInt(prompt('dijite su primer numero:'))
num2=parseInt(prompt('dijite su segundo numero:'))
if (num1>num2){
    console.log(`el ascendente es:${num2},${num1}`)
}
else if (num1<num2){
    console.log(`el ascendente es: ${num1},${num2}`)
}

// EJERCICIO 2
let num=parseInt(prompt('dijite un numero del 1 al 10:'))
if (num>0 && num<=10){
    switch (num){
        case 1:
            console.log(`El numero es impar`)
            break
        case 2:
            console.log(`El numero es par`)
            break
        case 3:
            console.log(`El numero es impar.`)
            break
        case 4:
            console.log(`El numero es par`)
            break
        case 5:
            console.log(`El numero es impar`)
            break
        case 6:
            console.log(`El numero es par.`)
            break
        case 7:
            console.log(`El numero es impar`)
            break
        case 8:
            console.log(`El numero es par.`)
            break
        case 9:
            console.log(`El numero es impar.`)
            break
        case 10:
            console.log(`El numero es par.`)
            break
    }
}

// EJERCICIO 3
let num=parseInt(prompt('dijite un numero del 1 al 10:'))
if (num>0 && num<=10){
    switch (num){
        case 1:
            console.log(`El numero es UNO.`)
            break
        case 2:
            console.log(`El numero es DOS.`)
            break
        case 3:
            console.log(`El numero es TRES.`)
            break
        case 4:
            console.log(`El numero es CUATRO.`)
            break
        case 5:
            console.log(`El numero es CINCO.`)
            break
        case 6:
            console.log(`El numero es SEIS.`)
            break
        case 7:
            console.log(`El numero es SIETE.`)
            break
        case 8:
            console.log(`El numero es OCHO.`)
            break
        case 9:
            console.log(`El numero es NUEVE.`)
            break
        case 10:
            console.log(`El numero es DIEZ.`)
            break}
    } else {
        console.log(`ERROR`)
    }

// EJERCICO 4
let adicional=100
let minutos=parseInt(prompt('dijite la cantidad de minutos de su llamada:'))
if (minutos>1 && minutos<=3){
    console.log(`Su llamada tiene un costo de 200 pesos.`)
}
if (minutos>=4){
    tot=adicional*(minutos-3)
    console.log(`El costo e su llamada es: ${tot+200}`)
}

// EJERCICIO 5
let c1=parseInt(prompt('dijite la cantidad de conejos blancos:'))
let p1=parseInt(prompt('dijite el valor  de  los conejos blancos:'))
let c2=parseInt(prompt('dijite la cantidad de conejos negros:'))
let p2=parseInt(prompt('dijite el valor  de los conejos negros:'))
let x1=parseInt(prompt('dijite la cantidad de conejos blancos vendidos:'))
let x2=parseInt(prompt('dijite la cantidad de conejos negros vendidos:'))
console.log(`En la granja hay ${c1+c2} conejos blancos y negros.`)
console.log(`se vendieron ${x1+x2} conejos.`)
console.log(`El valor total por los conejos blancos vendidios es: ${x1*p1}`)
console.log(`El valor total por lo conejos negros vendidos es: ${x2*p2}`)
console.log(`El valor total de conejos blancos y negros es :${(x1*p1)+(x2*p2)}`)
if (x1>x2){
    console.log('se vendieron mas conejos blancos')
}else {
    console.log('se vendieron mas conejos negros.')
}

// ejercicio 6
let prev1=parseFloat(prompt('dijite la ota del previo 1:'))
let prev2=parseFloat(prompt('dijite la ota del previo 2:'))
let prev3=parseFloat(prompt('dijite la ota del previo 3:'))
let trab1=parseFloat(prompt('dijite la ota del trabajo 1:'))
let trab2=parseFloat(prompt('dijite la ota del trabajo 2:'))
if (prev1>=0 && prev2>=0 && prev3>=0){
    total1=((prev1+prev2+prev3)/3)*60/100}
if (trab1>=0 && trab2>=0){
    total2=((trab1+trab2)/2)*40/100}
console.log(`Su nota promedio final es:${total1+total2}`)

// ejercicio 7
let clave=parseInt(prompt(`
1. descuento del 10%
2. descuento del 20%
dijite su clave:`))
let nombre=(prompt('dijite el nombre del articulo:'))
let cant=parseInt(prompt('dijite la cantidad de articulos que desea llevar:'))
let prec=parseFloat(prompt('dijite el precio del  articulo:'))
console.log(`El nombre del articulo es: ${nombre}`)
console.log(`El precio por unidad del articulo es: ${prec}`)
console.log(`La cantidad de articulos que usted deseo llevar es: ${cant}`)
if (clave==1){
    porce1=(cant*prec)
    total1=(porce1-(porce1*10/100))
    console.log(`El precio a pagar por los articulos es: ${total1}. Descuento del 10%`)}
else {
    porce2=(cant*prec)
    total2=(porce2-(20/100))
    console.log(`E l precio a pagar por sus articulos es: ${total2}. Descuento del 20%`)
}

// ejercicio 8
let presuouestoAnual=parseInt(prompt('DIJITE EL PRESUPUESTO ANUAL:'))
let Psiquiatría=parseInt(prompt('dijite porcentaje que corresponde a Psiquiatría:'))
let Pediatría=parseInt(prompt('dijite porcentaje que corresponde a Pediatría,:'))
let Traumatologia=parseInt(prompt('dijite porcentaje que corresponde a Traumatologia:'))
sumaDePorcentaje=(Psiquiatría+Pediatría+Traumatologia)
if (sumaDePorcentaje>100 || sumaDePorcentaje<100){
    alert('ERROR DE PORCENTAJES...DIJITE PORCENTAJES CORRECTAMENTE:')
}
else if (sumaDePorcentaje==100){
    console.log(`El presupuesto anual es:${presuouestoAnual}`)
    console.log(`Le corresponde a Psiquiatría:${presuouestoAnual*Psiquiatría/100}`)
    console.log(`Le corresponde a Pediatria:${presuouestoAnual*Pediatría/100}`)
    console.log(`Le corresponde a Traumatologia:${presuouestoAnual*Traumatologia/100}`)
}

// ejercicio 9
let distancia=parseInt(prompt('Dijite la distancia a recorrer:'))
let dias=parseInt(prompt('Dijite los dias:'))
if (dias>=7 && distancia>=800){
    descuento=3/100
    total1=distancia*2.5
    console.log(`Su valor a pagar es: ${total1*3/100}, SU VUELO TUBO UN DESCUENTO DEL 30%`)
}
if (dias<=6 && distancia<=799){
    total=distancia*2.5
    console.log(`Su valor a pagar es: ${total}, SU VUELO NO TIENE NINGUN DESCUENTO.`)
}