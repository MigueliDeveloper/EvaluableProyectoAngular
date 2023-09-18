const Tareas = require('../models/tareasModels');

exports.crearTareas = async(req, res) => {
	try{
		let tarea;
		// Creamos nuestra tarea
		tarea = new Tareas(req.body);
		await curso.save();
        res.send(empleado);

	}catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
	}
}

exports.obtenerTareas = async(req, res) => {
    try {
        const tareas = await Tareas.find();
		res.json(usuarios)
	} catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');

    }
}

exports.actualizarTareas = async (req, res) => {
	try {
		const { _id, nombre, descripcion, tareaIniciada, tareaPendiente, tareaFinalizada} = req.body;
		let tareas = await Tareas.findById(req.params.id);
		if(!empleado) {
			res.status(404).json({ msg: 'No existe la Tarea' })
		} 

        tareas._id = _id;
        tareas.nombre = nombre;
        tareas.descripcion = descripcion;
        tareas.tareaIniciada = tareaIniciada;
        tareas.tareaPendiente =  tareaPendiente;
        tareas.tareaFinalizada = tareaFinalizada ;

		tareas = await Tareas.findOneAndUpdate({ _id: req.params.id }, tarea, { new: true} )
		res.json(tareas);
	} catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminaTareas = async(req, res) => {
	try {

        let tareas = await Tareas.findById(req.params.id);
        if(!tareas){
			res.status(404).json({ msg: 'No existe las Tareas'})
		}
		await Curso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Tarea eliminada con exito' });   
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}