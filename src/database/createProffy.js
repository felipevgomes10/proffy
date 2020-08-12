module.exports = async function (
  db,
  { proffyValue, classValue, classScheduleValues }
) {
  //inserir dados na tabela proffies
  const insertedProffy = await db.run(`
  INSERT INTO proffies (
    name, 
    avatar,
    whatsapp,
    bio
  ) VALUES (
    "${proffyValue.name}",
    "${proffyValue.avatar}",
    "${proffyValue.whatsapp}",
    "${proffyValue.bio}"
  );
  `);

  const proffy_id = insertedProffy.lastID;

  //inserir dados na tabela classes
  const insertedClass = await db.run(`
  INSERT INTO classes (
    subject,
    cost,
    proffy_id
  ) VALUES (
    "${classValue.subject}",
    "${classValue.cost}",
    "${proffy_id}"
  );
  `);

  const class_id = insertedClass.lastID;

  //Inserir dados na tabela class_schedule
  const insertedAllClassesScheduleValues = classScheduleValues.map((value) => {
    return db.run(`
    INSERT INTO class_schedule (
      class_id,
      weekday,
      time_from,
      time_to
      ) VALUES (
      "${class_id}",
      "${value.weekday}",
      "${value.time_from}",
      "${value.time_to}"
      );
    `);
  });

  //aqui vou executar todos os db.run() das class_schedule
  await Promise.all(insertedAllClassesScheduleValues);
};