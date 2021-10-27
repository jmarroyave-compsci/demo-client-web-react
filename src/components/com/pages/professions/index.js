import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import Banner from 'com/ui/banner'
import Item from './com/item';
import { getQuote } from 'data/quotes';

export default function Layout( props ){
  	const quote = getQuote("director");

	return (
	    <Banner 
	      showData={true}
	      title={config.page.title}
	      description={`"${quote.text}" ${quote.from}`}
	      data={getData()}
	      item={(data) => <Item full {...data} />}
	    />
	)
}	

function getData(){
	return [
		{ name: "Actors", url: "/movies/stories/actors", img: "/img/ba_pro_act.jpg"},
		{ name: "Directors", url: "/movies/stories/directors", img: "/img/ba_pro_dir.jpg"},
		{ name: "Writers", url: "/movies/stories/writers", img: "/img/ba_pro_wri.jpg"},
	]
}