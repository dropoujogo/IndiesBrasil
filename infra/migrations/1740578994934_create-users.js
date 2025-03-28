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
    //60 is bcrypt max len
    password: {
      type: "varchar(60)",
      notNull: true,
    },
    cpf: {
      type: "numeric (11)",
      notNull: true,
      unique: true,
    },
    created_at: {
      type: "timestamptz",
      default: pgm.func("timezone('utc',now())"),
      notNull: true,
    },
    updated_at: {
      type: "timestamptz",
      default: pgm.func("timezone('utc',now())"),
      notNull: true,
    },
  });
};

exports.down = false;
