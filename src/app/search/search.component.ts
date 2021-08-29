import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';
import {ApicallService} from '../services/apicall.service';
import { datamodel } from '../model/datamodel';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputField: FormControl = new FormControl();
  searchResults: any[] = [];
  keyword = 'name';
  datas:datamodel={
    q:'',
    type:'',
    limit:'',
    offset:''
  };
  data = [];
  constructor(private searchService: SearchService,private apicall:ApicallService) { }

  ngOnInit() {
    this.inputField.valueChanges
    /** .subscribe(inputField => this.searchService.searchArtists(inputField)**/
    .subscribe(result => {
      if(result.status === 400) {return;}
      else { this.searchResults = result.artists.items; }
    

    });
  }
  getartistdata(e){
    this.datas.q=e;
    this.datas.type='artist';
    this.datas.limit='10'
    this.datas.offset='5'
    this.data = [];
    this.apicall.get(this.datas).subscribe((res:any)=>{
      this.data=res.artists.items;
      console.log(this.data);
    })
  }
  getplaylistdata(e){
    this.datas.q=e;
    this.datas.type='playlist';
    this.datas.limit='10'
    this.datas.offset='5'
    this.data = [];
    
    this.apicall.get(this.datas).subscribe((res:any)=>{
      this.data=res.playlists.items;
      console.log(this.data);
    })
  }
  getalbumdata(e){
    this.datas.q=e;
    this.datas.type='album';
    this.datas.limit='10'
    this.datas.offset='5'
    this.data = [];
    
    this.apicall.get(this.datas).subscribe((res:any)=>{
      this.data=res.albums.items;
      console.log(this.data);
    })
  }
  getsongdata(e){
    this.datas.q=e;
    this.datas.type='track';
    this.datas.limit='10'
    this.datas.offset='5'
    this.data = [];
    
    this.apicall.get(this.datas).subscribe((res:any)=>{
      this.data=res.tracks.items;
      console.log(this.data);
    })
  }
  selectEvent(e){
    console.log(e.external_urls.spotify)
   window.open(e.external_urls.spotify, "_blank");
  }
  

}
