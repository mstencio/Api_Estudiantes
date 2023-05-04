import { getConnection, querys, sql } from "../models/index.js";

//Función para crear un registro de un estudiante
export const crearEstudiante = async (req, res) => {
  let { nombre } = req.body;
  let { cedula } = req.body;
  let { telefono } = req.body;
  let { direccion } = req.body;
  let { correo } = req.body;

  
  
  // validacion
  if (nombre == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido" });
  }
  else if (cedula == null) {
      return res.status(400).json({ msg: "Por favor llene el campo de la cedula requerido" });
    }
    else if (telefono == null) {
      return res.status(400).json({ msg: "Por favor llene el campo del telefono requerido" });
    }
    else if (direccion == null) {
      return res.status(400).json({ msg: "Por favor llene el campo de la direccion requerido" });
    }
    else if (correo == null) {
      return res.status(400).json({ msg: "Por favor llene el campo del correo requerido" });
    }



  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("cedula", sql.VarChar, cedula)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .input("correo", sql.VarChar, correo)
      .query(querys.crearEstudiante);

    res.json({ nombre, cedula, telefono, direccion, correo });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos estudiantes
export const getEstudiantes = async (req, res) => {
try {

  const pool = await getConnection();

  const result = await pool
  .request()
  .query(querys.getEstudiantes);

  res.json(result.recordset);

} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un estudiante escogiendo el id
export const getEstudianteById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.getEstudianteById);

  return res.json(result.recordset[0]);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un estudiante
export const actualizarEstudianteById = async (req, res) => { 
  const { nombre } = req.body;
  const { cedula } = req.body;
  const { telefono } = req.body;
  const { direccion } = req.body;
  const { correo } = req.body;

// validacion

if (nombre == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido" });
}
else if (cedula == null) {
    return res.status(400).json({ msg: "Por favor llene el campo de la cedula requerido" });
  }
  else if (telefono == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del telefono requerido" });
  }
  else if (direccion == null) {
    return res.status(400).json({ msg: "Por favor llene el campo de la direccion requerido" });
  }
  else if (correo == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del correo requerido" });
  }




try {
  const pool = await getConnection();
  await pool
    .request()
    .input("id", req.params.id)
    .input("nombre", sql.VarChar, nombre)
    .input("cedula", sql.VarChar, cedula)
    .input("telefono", sql.VarChar, telefono)
    .input("direccion", sql.VarChar, direccion)
    .input("correo", sql.VarChar, correo)
    .query(querys.actualizarEstudianteById);

    res.json({ nombre, cedula, telefono, direccion, correo });
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un estudiante escogiendo el id
export const borrarEstudianteById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.borrarEstudianteById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultEstudiante = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');