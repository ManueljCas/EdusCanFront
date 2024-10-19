// src/Interfaces/Group.ts
export interface Grupo {
    id: string;  // Identificador único del grupo
    nombre: string;
    materia: string;
    turno: string;  // Se usa turno en lugar de grado
    dias: string;
    duracion: string;
}
