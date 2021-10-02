-- Table: public.vehiculo

-- DROP TABLE public.vehiculo;

CREATE TABLE public.vehiculo
(
  id_vehiculo integer NOT NULL DEFAULT nextval('vehiculo_id_vehiculo_seq'::regclass),
  tipo_vehiculo character varying(200),
  modelo_vehiculo character varying(200),
  placa_vehiculo character varying(20),
  num_puertas integer,
  num_puestos integer,
  CONSTRAINT vehiculo_pkey PRIMARY KEY (id_vehiculo)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.vehiculo
  OWNER TO postgres;
