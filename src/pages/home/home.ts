import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}  
  
  appQuestions = [
    {
      id: 1,
      question: '¿Quaestio # 1?'
    }
  ];

  appDescription = [
    {
       id: 1,
       paragraph: 'Es una herramienta que te ayuda a desarrollar y activar tus habilidades en el plano personal y laboral. Nos enseña a aprovechar al máximo nuestras habilidades para tener relaciones personales más placenteras. Nos ayuda a distinguir cuál es el momento oportuno para tomar esa decisión importante. Nos hace más conscientes sobre lo que necesitamos para sentirnos en equilibrio y en armonía con nosotros mismos y con todo lo que nos rodea.' 
    },
    {
       id: 2,
       paragraph: 'Hay situaciones que nos tocan vivir que las llegamos a ver como obstáculos para alcanzar nuestras metas pero son oportunidades que la vida nos presenta para crecer.'
    },
    {
      id: 3,
      paragraph: 'El momento en que naciste es perfecto para que desenvuelvas tu potencial y sepas conducirte dentro del ambiente en el cual te tocó vivir.'
    },
    {
      id: 4,
      paragraph: 'Lo que decidamos no trabajar de nuestro interior en esta vida se quedará guardado para la siguiente hasta que lo hagamos.'
    },
    {
      id: 5,
      paragraph: 'Conocernos interiormente es una guía para lograr todos nuestros objetivos.'
    }
  ];

}

