import { Router } from "express";
import {
  crearEstudiante,
  getEstudiantes,
  getEstudianteById,
  actualizarEstudianteById,
  borrarEstudianteById,
  defaultEstudiante
} from "../controllers/estudiantes.controller.js";

const router = Router();

//CRUD para la tabla estudiante

//C
router.post("/estudiantes/crearEstudiante", crearEstudiante);

//R - ejemplo simple
router.get("/estudiantes/getEstudiantes", getEstudiantes);

//R - ejemplo con parametro
router.get("/estudiantes/getEstudianteById/:id", getEstudianteById);

//U
router.put("/estudiantes/actualizarEstudianteById/:id", actualizarEstudianteById);

//D
router.delete("/estudiantes/borrarEstudianteById/:id", borrarEstudianteById);


//Ruta en caso de digitar una erronea
router.get("/Estudiante/*", defaultEstudiante);

export default router;
