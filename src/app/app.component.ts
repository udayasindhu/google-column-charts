import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'drilldown';
  displayExpectedMenu: boolean = false;
  displayProductTypeMenu: boolean = false;
  displaySubMenu: boolean = false;
  displayGeoMenu: boolean = false;
  displayDelMenu: boolean = false;

  showGraph: boolean = false;
  graphHeader: string;
  graphType: string;
  graphData: any;
  graphColumns: Array<string>;
  graphHeight: number;
  graphWidth: number;

  showExpectedMenu() {
    this.displayExpectedMenu = !this.displayExpectedMenu;
  }

  showSubMenu(subMenuType: string) {
    this.displaySubMenu = true;
    if (subMenuType === 'PRO') {
      this.showProductMenu();
    } else if (subMenuType === 'GEO') {
      this.showGeoGraph();
    } else if (subMenuType === 'DEL') {
      this.showDelGraph();
    }
  }

  showProductMenu() {
    this.showGraph = false;
    this.displayGeoMenu = false;
    this.displayDelMenu = false;
    this.displayProductTypeMenu = !this.displayProductTypeMenu;
  }

  showGeoGraph() {
    this.displayProductTypeMenu = false;
    this.displayDelMenu = false;
    this.displayGeoMenu = !this.displayGeoMenu;
    this.graphHeader = 'Geography wise chart';
    (this.graphColumns = ['Name', 'Value']),
      (this.graphData = [
        ['USA', 18895226],
        ['Canada', 8999999],
      ]);
    this.graphHeight = 400;
    this.graphWidth = 600;
    this.loadGraph();
  }

  showDelGraph() {
    this.displayProductTypeMenu = false;
    this.displayGeoMenu = false;
    this.displayDelMenu = !this.displayDelMenu;
    this.graphHeader = 'Deliquency wise chart';
    (this.graphColumns = ['Name', 'Value']),
      (this.graphData = [
        ['Current', 6252562],
        ['30 Days', 5245456],
        ['60 Days', 7865565],
        ['90 Days', 8531642],
      ]);
    this.graphHeight = 400;
    this.graphWidth = 600;
    this.loadGraph();
  }

  showSecuredProductsGraph() {
    this.graphHeader = 'Secured Products';
    (this.graphColumns = ['Product', 'Value']),
      (this.graphData = [
        ['Product1', 9250265],
        ['Product2', 8565223],
        ['Product3', 10079737],
      ]);
    this.graphHeight = 400;
    this.graphWidth = 600;
    this.loadGraph();
  }

  showUnsecuredProductsGraph() {
    this.graphHeader = 'Unsecured Products';
    (this.graphColumns = ['Product', 'Value']),
      (this.graphData = [
        ['Product4', 10079737],
        ['Product5', 8565223],
        ['Product6', 9250265],
      ]);
    this.graphHeight = 400;
    this.graphWidth = 600;
    this.loadGraph();
  }

  loadGraph() {
    this.showGraph = true;
    this.graphType = 'ColumnChart';
  }
}
