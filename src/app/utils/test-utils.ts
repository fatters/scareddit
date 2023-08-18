import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const getNativeElement = (fixture: ComponentFixture<any>, cssClass: string): HTMLElement => {
  const element = fixture.debugElement.query(By.css(cssClass));
  return element ? element.nativeElement : null;
};

export const getDebugElements = (fixture: ComponentFixture<any>, cssClass: string): DebugElement[] => {
  return fixture.debugElement.queryAll(By.css(cssClass));
};
