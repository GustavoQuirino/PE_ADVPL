import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  isModalOpen: boolean = true

  PeMata010: Array<any> = [
    { label: 'MT010MEM', link: '/MT010MEM'},
    { label: 'MA010FIL', link: '/MA010FIL'},
    { label: 'M010FILB', link: '/M010FILB'},
    { label: 'MT010COR', link: '/MT010COR'},
    { label: 'MA010BUT', link: '/MA010BUT'},
    { label: 'MT010VCP', link: '/MT010VCP'},
    { label: 'MT010INC', link: '/MT010INC'},
    { label: 'MT010CAN', link: '/MT010CAN'},
    { label: 'MT010ALT', link: '/MT010ALT'},
    { label: 'A010TOK',  link: '/A010TOK' },
    { label: 'MT010VLD', link: '/MT010VLD'},
    { label: 'MTA010NC', link: '/MTA010NC'},
    { label: 'M010B5CP', link: '/M010B5CP'},
    { label: 'MT010BRW', link: '/MT010BRW'},
    { label: 'A010BPE',  link: '/A010BPE' },
    { label: 'MTA010NC', link: '/MTA010NC'},
    { label: 'MT010JIN', link: '/MT010JIN'},
    { label: 'MT010EAI', link: '/MT010EAI'}
  ]

  PeMata020: Array<any> = [
    { label: 'MT020FIL',   link: '/MT020FIL'  },
    { label: 'MA020MEM',   link: '/MA020MEM'  },
    { label: 'MA020BUT',   link: '/MA020BUT'  },
    { label: 'M020INC',    link: '/M020INC'   },
    { label: 'MA020ALT',   link: '/MA020ALT'  },
    { label: 'A020EOK',    link: '/A020EOK'   },
    { label: 'M020EXC',    link: '/M020EXC'   },
    { label: 'MA020TDOK',  link: '/MA020TDOK' },
    { label: 'MA020TOK',   link: '/MA020TOK'  },
    { label: 'MT20FOPOS',  link: '/MT20FOPOS' },
    { label: 'A020DELE',   link: '/A020DELE'  },
    { label: 'MATA020IPG', link: '/MATA020IPG'},
    { label: 'MA020ROT',   link: '/MA020ROT'  } 
  ]

  PeMata040: Array<any> = [
    { label: 'MA040AAL',  link: '/MA040AAL' },
    { label: 'MA040BRW',  link: '/MA040BRW' },
    { label: 'MA040BUT ', link: '/MA040BUT '},
    { label: 'MA040DAL',  link: '/MA040DAL' },
    { label: 'MA040DIN',  link: '/MA040DIN' },
    { label: 'MA040TOK',  link: '/MA040TOK' },
    { label: 'MT040DEL',  link: '/MT040DEL' },
    { label: 'MT040VDE',  link: '/MT040VDE' },
    { label: 'MTA040MNU', link: '/MTA040MNU'},
    { label: 'M040OEAI',  link: '/M040OEAI' },
    { label: 'M040OENV',  link: '/M040OENV' },
    { label: 'MA040VLD',  link: '/MA040VLD' },
    { label: 'M040SE1',   link: '/M040SE1'  },
    
  ]

  rotinas = [
    { label: 'MATA010', details: this.PeMata010 },
    { label: 'MATA020', details: this.PeMata020 },
    { label: 'MATA040', details: this.PeMata040 },
  ]

  constructor( private router : Router ) {}

  ngOnInit(): void {
    setTimeout(()=>{ this.isModalOpen = false },3000)
  }

  loadPage(pe: any){     
    this.router.navigate([pe.link])
  }
}
