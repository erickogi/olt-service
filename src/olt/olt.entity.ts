import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Olt {
  @PrimaryGeneratedColumn()
  OLT_ID: number;

  @Column({ length: 30, nullable: true })
  DEV_IP: string;

  @Column({ length: 70, nullable: true })
  DEVNAME: string;

  @Column({ length: 40, nullable: true })
  MODEL: string;

  @Column({ type: 'timestamp', nullable: true })
  INSERT_DATE: Date;

  @Column({ length: 70, nullable: true })
  CONTRACTOR_AGENCY_NAME: string;

  @Column({ length: 50, nullable: true })
  DEV_VLAN_ID: string;

  @Column({ nullable: true })
  VENDOR_ID: number;

  @Column({ type: 'smallint', default: 0 })
  LOS_TICKETS: number;

  @Column({ type: 'smallint', default: 0 })
  LOS_NOTIFICATIONS: number;

  @Column({ nullable: true })
  ROLLOUT_AGENCY_ID: number;

  @Column({ nullable: true })
  MAINTENANCE_AGENCY_ID: number;

  @Column({ type: 'decimal', nullable: true })
  LONGITUDE: number;

  @Column({ type: 'decimal', nullable: true })
  LATITUDE: number;

  @Column({ length: 100, default: 'active' })
  STATUS: string;

  @Column({ length: 255, nullable: true })
  MAINTENANCE_AGENCY_NAME: string;

  @Column({ length: 255, nullable: true })
  ROLLOUT_AGENCY_NAME: string;

  @Column({ length: 255, nullable: true })
  VENDOR_NAME: string;
}