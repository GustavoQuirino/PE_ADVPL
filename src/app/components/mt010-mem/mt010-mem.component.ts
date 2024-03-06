import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mt010-mem',
  templateUrl: './mt010-mem.component.html',
  styleUrls: ['./mt010-mem.component.scss'],
})
export class MT010MEMComponent  implements OnInit {

  formato: string = 'aRet{ {cChave1, cMemo1},..{cChaveN, cMemoN} } onde:'
  exemplo: Array<any> = [
    { linha1: 'User function MT010MEM()', linha2: 'Local aRet := {}', linha3: 'AAdd( aRet, { "B1_CODTEST", "B1_VM_COD" } )', linha4: 'Return( aRet )'}
  ]
  constructor() { }

  ngOnInit() {}

}
