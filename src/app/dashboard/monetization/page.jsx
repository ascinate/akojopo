"use client"
import DashLeftMenu from '@/app/components/dashboard/DashLeftMenu';
import HomeCard from '@/app/components/dashboard/HomeCard';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react'
//component


//chart npm install @amcharts/amcharts5
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { useLayoutEffect } from "react";

function Page() {

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "category",
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Line Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    xAxis.data.setAll([
      { category: "A", value: 30 },
      { category: "B", value: 55 },
      { category: "C", value: 80 },
    ]);

    series.data.setAll([
      { category: "A", value: 30 },
      { category: "B", value: 55 },
      { category: "C", value: 80 },
    ]);

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    series.bullets.push(() =>
      am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
        }),
      })
    );

    return () => {
      root.dispose();
    };
  }, []);


  return (
    <>
      <Navbar />
      <main className="float-start w-100 maind-body">
        <section className="dash-section float-start w-100 position-relative">
          <div className="container">
            <div className='d-flex justify-content-between w-100'>
              <h2 className='dash'>Monetization</h2>
              <select name="" id="" className='w-25'>
                <option value="">option</option>
              </select>

            </div>
            <div className="row">
              <aside className='col-lg-3'>


                <DashLeftMenu />

              </aside>

              <div className='col-lg-9 '>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                  </li>

                </ul>
                <div className='container '>

                  <div className="tab-content dash-chart" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                    </div>



                    <HomeCard />
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><HomeCard /></div>

                  </div>
                </div>




              </div>
            </div>
          </div>
        </section>
      </main >

    </>
  )
}

export default Page
