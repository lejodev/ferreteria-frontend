import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HttpService } from 'src/app/core/services/http/http.service';
import { JwtServiceService } from 'src/app/core/services/jwtService/jwt-service.service';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.scss']
})
export class KpisComponent implements OnInit {

  salesAmount: number = 0
  user!: any; // Make it user type

  constructor(private http: HttpService, private jwtService: JwtServiceService) { }

  ngOnInit(): void {

    this.user = this.jwtService.decodeToken()
    const userSub = this.user.sub;

    console.log(this.user.sub);

    this.http.get('/sale/' + this.user.sub).pipe(map((res: any) => {
      if (Array.isArray(res)) {
        return res.length
      }
      return 0
    })).subscribe((res: any) => {
      this.salesAmount = res
      console.log(this.salesAmount);
      
    } )

  }
}
