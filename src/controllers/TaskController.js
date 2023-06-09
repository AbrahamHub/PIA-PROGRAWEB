function index(req, res) {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM tasks', (err, tasks) => {
      if(err) {
        res.json(err);
      }
      res.render('tasks/index', { tasks });
    });
  });
}

function create(req, res) {

  res.render('tasks/create');
}

function store(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('INSERT INTO tasks SET ?', [data], (err, rows) => {
      res.redirect('/tasks');
    });
  });
}

function destroy(req, res) {
  const id = req.body.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM tasks WHERE id = ?', [id], (err, rows) => {
      res.redirect('/tasks');
    });
  })
}

function edit(req, res) {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM tasks WHERE id = ?', [id], (err, tasks) => {
      if(err) {
        res.json(err);
      }
      res.render('tasks/edit', { tasks });
    });
  });
}

function update(req, res) {
  const id = req.params.id;
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('UPDATE tasks SET ? WHERE id = ?', [data, id], (err, rows) => {
      res.redirect('/tasks');
    });
  });
}

function calc(req, res){
  res.render('calc/calculadoraa');
}
function home(req, res){
  res.render('home');
}
function notes(req, res){
  res.render('notes/notas');
}
function tecnicas(req, res){
  res.render('tecnicas/estudio');
}

module.exports = {
  index: index,
  create: create,
  store: store,
  destroy: destroy,
  edit: edit,
  update: update,
  calc : calc,
  home : home,
  notes: notes,
  tecnicas: tecnicas,
}
