
import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  embedId: string;
  thumbnail: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}