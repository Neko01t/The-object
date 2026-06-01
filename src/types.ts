
export interface ModelInfo {
  title: string;
  description: string;
  verts: number;
  faces: number;
  isRigged: 'Yes' | 'No';
  imageRender: string;
  glbPath: string;
  blendPath: string;
}

export interface UserProfile {
  id: string;
  username: string;
}
