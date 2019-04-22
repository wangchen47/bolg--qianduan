export class Article {
  public id: number;
  public created_user_id: number;
  public tech_category_id: number;
  public label_id: number;
  public title: string;
  public cover_url: string;
  public intro: string;
  public content: string;
  public url: string;
  public created_time: number;
  public count_views: number;
  public label;
  public tech_category;
  public created_user;
  public user;
  checked: boolean;
  disabled: boolean;
}
