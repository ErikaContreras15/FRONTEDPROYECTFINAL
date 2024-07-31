export class Cliente {
    cedula: string = ''; // Usa el tipo primitivo 'string'
    nombre!: string;     // Usa el tipo primitivo 'string'
    direccion!: string;  // Usa el tipo primitivo 'string'
    usuario!: number;    // Este puede quedarse como 'number'
  
    constructor() {}
  }
  