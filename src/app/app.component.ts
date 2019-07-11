import { Component } from '@angular/core';
import {HeroModel} from './Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Roman: HeroModel = {
    name: 'Roman',
    health: 100,
    power: 18,
    defence: 6,
    remove: 9
  };
  Scorpion: HeroModel = {
    name: 'Scorpion',
    health: 100,
    power: 24,
    defence: 4,
    remove: 7
  };
  // runned = false;
  // fight() {
  //   this.runned = true;
  //   // this.Roman.health = 100;
  //   // this.Scorpion.health = 100;
  //   const interval = setInterval(() => {
  //     if (this.runned) {
  //       const power1 = this.calcPower(this.Roman.power);
  //       const power2 = this.calcPower(this.Scorpion.power);
  //       if (this.Scorpion.health > 0) {
  //         if (this.Scorpion.defence >= power1) {
  //           this.Scorpion.health -= 1;
  //         } else {
  //         this.Scorpion.health -= power1 - this.Scorpion.defence;
  //         if (this.Scorpion.health <= 0) {
  //           this.Scorpion.health = 0;
  //         }
  //         }
  //       } else {this.runned = false;
  //       }
  //
  //       if (this.Roman.health > 0) {
  //         if (this.Roman.defence >= power2) {
  //           this.Roman.health -= 1;
  //         } else {
  //           this.Roman.health -= power2 - this.Roman.defence;
  //           if (this.Roman.health <= 0) {
  //             this.Roman.health = 0;
  //           }
  //         }
  //       } else {
  //         this.runned = false;
  //       }
  //
  //     } else {
  //       clearInterval(interval);
  //     }
  //     this.runned = false;
  //     }, 500);
  //   }
    calcPower(maxPower: number): number {
      return Math.floor(Math.random() * (maxPower - 1) + 1);
    }
    ScorpionShot() {
    const powerS = this.calcPower(this.Scorpion.power);
    if (this.Scorpion.health > 0 && this.Roman.health > 0) {
      if (this.Roman.defence >= powerS) {
        this.Roman.health -= 1;
      } else {
        this.Roman.health -= powerS - this.Scorpion.defence;
        if (this.Roman.health <= 0) {
          this.Roman.health = 0;
        }
      }
    }
    }
    RomanShot() {
    const powerR = this.calcPower(this.Roman.power);
    if (this.Scorpion.health > 0 && this.Roman.health > 0) {
        if (this.Scorpion.defence >= powerR) {
          this.Scorpion.health -= 1;
        } else {
          this.Scorpion.health -= powerR - this.Scorpion.defence;
          if (this.Scorpion.health <= 0) {
            this.Scorpion.health = 0;
          }
        }
      }

    }

  // remove() {
  //   this.runned = true;
  //   if (this.Roman.health < 100 && this.Scorpion.health < 100) {
  //     if (this.runned) {
  //       this.Roman.health += this.Roman.remove;
  //       if (this.Roman.health > 100) {
  //         this.Roman.health = 100;
  //       }
  //     }
  //     if (this.runned) {
  //      this.Scorpion.health += this.Scorpion.remove;
  //      if (this.Scorpion.health > 100) {
  //        this.Scorpion.health = 100;
  //      }
  //    }
  //   } else {this.runned = false;
  //   }
  //
  //   this.runned = false;
  // }
  RomanRemove() {
    if (this.Scorpion.health > 0 && this.Roman.health > 0) {
      if (this.Roman.health < 100) {
        this.Roman.health += this.Roman.remove;
        if (this.Roman.health > 100) {
          this.Roman.health = 100;
        }
      }
    }
  }
  ScorpionRemove() {
    if (this.Scorpion.health > 0 && this.Roman.health > 0) {
      if (this.Scorpion.health < 100) {
        this.Scorpion.health += this.Scorpion.remove;
        if (this.Scorpion.health > 100) {
          this.Scorpion.health = 100;
        }
      }
    }
  }
  again() {
    if (this.Scorpion.health < 1 || this.Roman.health < 1) {
          this.Scorpion.health = 100;
          this.Roman.health = 100;
    }

  }

}



//
// if (this.Scorpion.health > 0 && this.Roman.health > 0) {
//   this.Scorpion.health -= power1;
//   this.Roman.health -= power2;
// } else {
//   this.runned = false;
//   this.Roman.health = 0;
// }


// if (this.Roman.health <= 0) {
//   this.runned = false;
//   this.Roman.health = 0;
// } else {
//   if (this.Roman.defence >= power2) {
//     this.Roman.health -= 0;
//   } else {
//     this.Roman.health -= power2 - this.Roman.defence;
//   }
// }
