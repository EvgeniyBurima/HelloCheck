import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Status = 'active' | 'archive';
export type Property = {
  type:
}

export interface ClientState {
  id: number,
  name: string,
  balance: number,
  nextDateOfServise: number,
  properties: Property[],
  totalEarned: number,
  status: Status
}

const initialState: ClientState = {
  value: 0,
}

