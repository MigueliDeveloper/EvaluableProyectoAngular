const Usuarios = require('../models/usuariosModel');

exports.crearUsuarios = async(req, res) => {
	try{
		let usuario;
		// Creamos nuestro usuario
		usuario = new Usuarios(req.body);
		await curso.save();
        res.send(curso);

	}catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
	}
}

exports.obtenerUsuarios = async(req, res) => {
	try {
		const usuarios = await Usuarios.find();
		res.json(usuarios)
	} catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
	}
}

exports.actualizarUsuarios = async (req, res) => {
	try {
		const { nombre, descripcion, categoria, duracion, temas} = req.body;
		let usuarios = await Usuarios.findById(req.params.id);
		if(!curso) {
			res.status(404).json({ msg: 'No existe el Curso' })
		} 




	}



}


