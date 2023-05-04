export const querys = {

  //C
  crearEstudiante:
  "INSERT INTO estudiante VALUES (@nombre, @cedula, @telefono, @direccion, @correo);",

      //R - ejemplo simple
  getEstudiantes:
   "SELECT * FROM estudiante",

     //R - Ejemplo con parametro
  getEstudianteById: 
  "SELECT * FROM estudiante WHERE id_estudiante = @id  ",

    //U
actualizarEstudianteById:
"UPDATE estudiante SET nombre = @nombre, cedula = @cedula, telefono = @telefono, direccion = @direccion, correo = @correo WHERE id_estudiante = @id",

  // D
  borrarEstudianteById:
   "DELETE estudiante where id_estudiante = @id",

};