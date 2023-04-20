CREATE TYPE status AS ENUM ('Not Started', 'Completed', 'In Progress');

create table
  public.users (
    user_id bigint generated by default as identity not null,
    username text not null,
    constraint users_pkey primary key (user_id)
  ) tablespace pg_default;

create table
  public.tasks (
    id bigint generated by default as identity not null,
    user_id bigint not null,
    title text not null,
    description text null,
    status public.status not null,
    due_date date null,
    constraint task_pkey primary key (id),
    constraint tasks_user_id_fkey foreign key (user_id) references users (user_id)
  ) tablespace pg_default;
