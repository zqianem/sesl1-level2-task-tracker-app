CREATE TYPE status AS ENUM ('Not Started', 'Completed', 'In Progress');

create table
  public.users (
    id bigint generated by default as identity not null,
    username text not null,
    constraint users_pkey primary key (id),
    constraint users_username_key unique (username)
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
    constraint tasks_user_id_fkey foreign key (user_id) references users (id) on delete cascade
  ) tablespace pg_default;
