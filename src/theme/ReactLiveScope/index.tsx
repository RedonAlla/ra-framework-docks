import React from 'react';
import Avatar, { AvatarGroup } from 'ra-avatar';
import Button from 'ra-buttons';
import Icon, { Spinner } from 'ra-icons';
import BottomSheet from "ra-bottom-sheet";
import Tag from 'ra-tags';
import Badge from 'ra-badges';
import SkeletonLoader, { Circle, Rect } from 'ra-skeleton-loading';
import { TextBox, NumericTextBox, Check, CheckList } from 'ra-inputs';


// Add react-live imports you need here
const ReactLiveScope: any = {
  React,
  ...React,
  Avatar,
  AvatarGroup,
  Button,
  Icon,
  Spinner,
  BottomSheet,
  Tag,
  Badge,
  SkeletonLoader,
  Circle,
  Rect,
  TextBox,
  NumericTextBox,
  Check,
  CheckList
};

export default ReactLiveScope;
