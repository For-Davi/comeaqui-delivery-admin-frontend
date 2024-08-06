export interface ItemsDrawerAdmin {
  src: string;
  label: string;
  separator: boolean;
  to: string;
}

export interface ItemsDrawerUser {
  srcLight?: string;
  srcDark?: string;
  label: string;
  value: string;
}
