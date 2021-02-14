import { wrap } from 'module';
import React, { Children, Component } from 'react'
import styled from "styled-components";

interface Props {
  wrap?: string;
  justify?: string;
  color?: string;
  direction?: string;
  width?: string;
  height?: string;
  Children?: any;
  align?: string;
  padding?: any;
}
const FlexBox = styled.div<Props>`
  border:none;
  background-color:${props=>props.color ||"none"};
  display:flex;
  width:${props => props.width};
  height:${props => props.height};
  flex-flow:${props => props.direction} ${props => props.wrap};
  justify-content:${props => props.justify};
  align-items:${props => props.align || "center" };
  padding:${props => props.padding};
`

export const FlexRowStart = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="row"
    justify="start"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexRowEnd = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="row"
    justify="flex-end"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexRowCenter = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="row"
    justify="center"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexRowSB = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="row"
    justify="space-between"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexColumnStart = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="column"
    justify="start"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexColumnEnd = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="column"
    justify="flex-end"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexColumnCenter = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="nowrap"
    direction="column"
    justify="center"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}

export const FlexColumnSB = ({children, BC, width, height,alignItem,padding }:any):any=> {
  return <FlexBox
    wrap="wrap"
    direction="column"
    justify="space-between"
    color={BC}
    width={width}
    height={height}
    align={alignItem}
    padding={padding}
  >{ children }</FlexBox>
}