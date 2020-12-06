CREATE TABLE movie (
    imdbid varchar2(10) NOT NULL,
    title varchar2(50) NOT NULL,
    year varchar2(4) NOT NULL,
    poster varchar2(200) NOT NULL,
    CONSTRAINT pk_movie PRIMARY KEY (imdbid)
);

CREATE TABLE user_movie (
    id_user NUMBER(10) NOT NULL,
    user_name varchar2(50) NOT NULL,
    user_password varchar2(50) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY (id_user)
);

CREATE OR REPLACE TRIGGER user_on_insert
  BEFORE INSERT ON user_movie
  FOR EACH ROW
BEGIN
  SELECT users_sequence.nextval
  INTO :new.id_user
  FROM dual;
END;


CREATE TABLE watch_list (
    id_user NUMBER,
    imdbid varchar2(10) NOT NULL,
    watched NUMBER(1) DEFAULT 0 NOT NULL,
    rate NUMBER DEFAULT 0 NOT NULL,
    CONSTRAINT fk_user foreign key (id_user) references user_movie (id_user),
    CONSTRAINT fk_imdbid foreign key (imdbid) references movie (imdbid),
    CONSTRAINT watched CHECK (watched in (1,0))
);


     

