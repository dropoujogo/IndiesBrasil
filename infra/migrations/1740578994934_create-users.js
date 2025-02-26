exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },
    //for reference, Github uses 39 characteres
    username: {
      type: "varchar(39)",
      notNull: true,
      unique: true,
    },

    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
    //72 is bcrypt max len
    password: {
      type: "varchar(72)",
      notNull: true,
    },
    cpf: {
      type: "numeric (11)",
      notNull: true,
      unique: true,
    },
    created_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },
    updated_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
    },
  });
};

exports.down = false;
