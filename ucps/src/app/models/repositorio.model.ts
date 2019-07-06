import { Injectable } from '@angular/core';
@Injectable()
export class Repositorio{
    public id: String
    public short_id: String;
    public created_at: String;
    public parent_ids: String;
    public title: String;
    public message: String;
    public author_name: String;
    public author_email: String;
    public authored_date: String;
    public committer_name: String;
    public committer_email: String;
    public commit_title:String;
    public committed_date: String;
    public stats: String;
    public status: String;
    public last_pipeline: String;
    public project_id: String;
    public push_data:String;
    public ref:String;
    public action:String;
}

@Injectable()
export class Branchs {
  public name: String
  public commit: String;
  public merged: String;
  public protected: String;
  public title:String;
  public author_name:String;
}
