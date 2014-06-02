/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/page2.html',
    'text!templates/controls/petek.html',
    'views/base',
    'collections/devices'

], function ($, _, Backbone, devicesTemplate, petekTemplate, BaseView, DevicesCollection) {
    'use strict';

    var Page2View = BaseView.extend({

        el: $('#workspace'),

        template: _.template(devicesTemplate),

        // The DOM events specific to an item.
        events: {

        },

        enum: {
            devices: {
                "galaxy-s5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMjcvMTS1hFZGAAAFH0lEQVR4nO2bu47bRhSGf46WXKlIkXeIWgNbBAESpPdLJAHslLGLFVadgQCLAIYMbWGnzAV2XsJ9uhQx4FYvkNKdwRnyTBrS4NrcXZGc4dzOB2yxhWaG+jT/nENRmdYaTDyc2Bp4u95kAH4A8BjAPQALW3N5Qg3gLYDnAF7uDnsnO8WaUAC/5SJ/UIgCIhPIkFmcyj0aekGaziTJPxWpbwE8dLGOzEbkbteb73KRv1otVsbH9gUNDUkSkiQKUaAQxYcP7fv6PRSp73eH/V9zr8vWDn1UiML4oIoUJEkQyMh4GTLkIsepOB38WkkSZV0+A3BV1uU5gIt2nEIUUKQeAZhdqLA07pnIzA8tSaLW9Tda689N/JGmL8q6VBrDU0qSBICr3WH/H4Cr5n8AQHPtZ4YuexC2duiJjTOzeePV7rB/Z2K87Xrz2djXFqJAWZfn2/XmCsB5N5Gaa7dZn9yIk0nHUogCkuQ/2/XGyHhZll07+4auBcCFJHnRnqE+EJxQX964DBlOxemo89cmts5QxhEsNDKsR25JJboVYMzkIsdSLJ2uwbpQSRJP/v3Z9jROISJIKfHs66fOhXLkGkApBQDw4YsOFjqRqqq8ENnCQiegtUZVVa6XcQ0WOgHfZAIsdDREhLquXS/jE1joSNpCyDdY6Ah8K4S6sNCB+FgIdWGhA/E1altY6ADqugaRmaclbMFCj0Rr7f3uBFjo0fh8bnZhoUfga8/ZBws9ghCitoWF3oHPPWcfLPQWfO85+2ChtxBS1Law0BsIoefsg4X2EGLUtrDQHkIrhLqw0I8Iqefsg4V+RIiFUBcW2iHkqG1hoQ0hF0JdWGhD6FHbwkIRbs/ZBwtFOF+NHUPyQpVSwRdCXZIWGnrP2UfSQmOK2pZkhcZUCHVJUmgoD3yNIUmhMUZtS3JCYyyEuiQnNNaobUlKaAw33+8iGaGx3Hy/i2SExh61LUkIjbXn7CN6oalEbUv0QlMohLpELTT2nrOPqIWmUgh1iVZoalHbEqXQ1AqhLlEKTTFqW6ITmlLP2Ud0QlON2paohMb2wNcYohGaYs/ZRzRCUy6EukQhNNWes4/ghabcc/YRvFCO2usELTT1nrOPoIVy1H5KsEK5EOonSKFcCN1MkEK5ELqZ4IRyIXQ7QQmN+UdGpghKKJ+bdxOMUL75fhzBCOWoPY4ghHLPeTzeC+WecxjeC+WoHYbXQrnnHI63Qjlqx+GtUC6ExuGlUO45x+OlUC6ExuOdUI7aaXgllAuh6XgllKN2Ot4I5Z7TDN4I5ag1gxdC+UdG5nAulHtOszgXylFrFqdCuRAyjzOh/MCXHZwJ5ai1gxOhXAjZw4lQjlp7zC6Ub77bZVahfPPdPrMK5ai1z2xCueech1mEctTOxyxCuRCajxPbE+Qix9OvfklCaC5y10uwL3QplliKpe1pmAbn37YwZrG+Q6dCIEiSUGS35clFjkIUEIF/xr0XKklC1vIJgF+tzlPLnwBchn48eC+0ogoAXu8O+3c259muN68rqi4D36DWll9pmKlqT8QJANzfrjeZkQF7aMa+38w1mebanTTetnboG9L05SJbTB6oEAW01peK1OV2vTGwtH7aM9QEpAkA3hgZbCC2hL6QJF+tFqvJAwkIrBYrmBhrLiRJAHjhYu7MVsO/XW9+z0X+oBAFRCaQwVpieoGGBukPFfkfu8P+oYt12CyKflSk/lakHgO4B2B6/vpNDeAtgOcAXrpahLUdyrjhf5/15l7b2BMnAAAAAElFTkSuQmCC",
                "galaxy-tab": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMjcvMTS1hFZGAAAE00lEQVR4nO3dP2sbZxzA8e89upMuIR1KVo/RGJc2U9rBW5eSlAacQDa/gVKqVq+hqAhKl9IpWyAxXRL6ArI0U1pwRq1ZAx1KIt099zwdIhsjy4990v197vcZJdk88PWdfs9jGQfWWoQ/VN0LEMWSoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ6RoJ4JVx8YD0cKuA/sA3vA9aoXJZzeAi+AQ+DpZDY1p58MTv8+dDwc3QIehSq8GamIMAgJCCpdrXCzWLTVpCZFG/0aOJjMpq+Onz8JOh6O7gBP4l58pa/6NS1X5JGYhHk2fw88mMymz2EZdDwcfQb8dTW8OgiDM3dh0WDaat7pdwvg88ls+nfw443vFfBP3It35cpsp+WVegR8qoC7oQolZov1VZ9QhbvAXQU8jIKo7jWJLS0bPlTA7Z7q1bwcsa1lw9sK2FFyvtB6y4Y7a0fahVmQmKTaFYlcIhURq/jM42uDJibh2z+/Y3Dt7BeI6hhj0GmK5eyH4X/98pfLBwUYXIuJP5KgdUnTFDLoDwZrnz/vLx7kFKFhrLUkSXJusItI0AbJsuzDlbkFCdoA1lq01mRZtvX3kqA1M8aQpunGt9hVErRGWmu01oV+TwlaA2staZpijLn4xTlJ0IoVMfi4SNAKpWlayODjIkErUPTg4yJBS1bG4OMiQUtS5uDjIkFLUOUtdpUELVgVg4+LBC3ItofqRZGgBSh7b5mHBN1CkYfqRZGgG6pz8HGRoBuoem+ZhwTNoa69ZR4S9JKaNPi4SNBLqHtvmYcEdWjq4OMiQc/R5MHHRYKuaMPg4yJBT2njLXaVBF1q0+Dj0vmgTTlUL0qng7Zlb5lHJ4M28VC9KJ0L6sPg49KpoG3dW+bRiaBt31vm4X1QHwcfF6+D+rK3zMPLoL4PPi7eBe3C4OPiTdAuDT4uXgTt8i12VeuDdnHwcWltUN8O1YvSyqBd21vm0aqgPh+qF6U1QWXwuZxWBO363jKPRgeVvWV+jQ0qg89mGhlU9paba1RQGXy215igMvgUo/agMvgUq9agcostXm1BZfApR+VB5VC9XJUGlb1l+SoJKofq1Sk9qAw+1So1qOwtq1dKUNlb1qfwoDL41KvQoLK3rF8hQWXwaY6tg8rg0ywbB5XBp5k2Ciq32ObKHVQGn2ZbGzRSET/v/SRXYINFKlr7+NqgsYrX/n9n0XwKeGOQwabtlg3fhMDLzGT7Sqmal1QMbTWJScis+32+r/oM1Pp/WN5GmckAXobA49Sm+xHr78ltk5iEryffsPPJzrmvWfy34Pd7v3kVNLUpwOMQeKaNPkqCZLev+jUva3uZzfjjh8OPJ7Ppv67XWY8mvsQkaKOPgGdqMpsa4GCezRfatv/Epxf0AL5wvWY8HH0Vqto/8FgIbTXzbL4ADiazqQmOf1DHw9Ed4Enci6+0+Uo9fg/V5vwfzlCF9FWfMGh31MQkzLP5e+DBZDZ9DhCcvvOMh6NbwKNQhTcjFREGIQFBTcsV61gs2mpSk6KNfs2HK/PV8fPB6lvJeDhSwH1gH9gDrle5YHGht8AL4BB4unzLPHEmqGg3Pzaf4oQE9YwE9YwE9YwE9YwE9YwE9YwE9YwE9YwE9YwE9YwE9YwE9cz/V6nj3qy1aogAAAAASUVORK5CYII=",
                "ipad": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMjcvMTS1hFZGAAAEMElEQVR4nO3cMW8cRRjG8efGe84oCp0raly4zVdASlKEgtZfACqEsHARUkKKU04gOr4ALQUgBT4ErYvrU7m0TnuzszMU3EnJsfHN7c7uzrz7/CpLtlcr/XX3+l3bM/Peg+RQY98AxcWgwjCoMAwqDIMKw6DCMKgwDCoMgwrDoMIwqDDF7oPr86sLAC8APANwNtod0TFuAbwB8GqxWt4AwMx7j+vzq88B/KpPtC5UAcUXbhYcHKyzKOuyBHC5WC1/m337yTcXAP55WDzUxaw4dA1KkPUWa7suATxWAL7TJ5oxM1bMCugTrQG8VACeFooxc7dt+EQBOOPMzN+24RlLCnPwvXbjNjDODHEv9AFzNYdWOuhrDwY1zuCrP7/Gg0dhF6S4rLX48dPX8YICwINHGvojBh2S9x5VVaGYFzjmD/n4422CnHOoquqokDsMmpi6rlFVVevvZ9CEVFWFuq47XYNBE+C9hzGm1VvsPgYdWZd52YRBR2SthbU26jUZdCTGGDjnol+XQQcWc142YdABdV1JQjDoQGKsJCEYtGe7R3h9zMsmDNqj2CtJCAbtSR8rSQgG7cFQ87IJg0bU90oSgkEjGWIlCcGgEYw1L5swaAdDryQhGLSlMVaSEAzaQirzsgmDHmnMlSQEgwZKcV42YdAAqc7LJgx6QEorSQgGvUfq87IJgzZI4RFeWwy6J+WVJASDviO3edmEQZHPShJi8kFzWklCTDpo7vOyyWSD5riShJhc0JxXkhCTOjTDOYfNZpN9TAcH4wwc/v9D3GSCWmthTP6HfxhncFfdvS3r8pe76u7t/oEm4oPu3mJz3y93tgGfL1bLLwE83w8qeoZKW0lCiA0qcSUBgFN1irIu/7g+v/odwGen6vS9z4sMKnUlAf4LWqjiY+vsF01H4YoKKukR3n0UFPZfmTtigk5xXjYREVTCb0liyT6o5HnZRrZBpT/CayvLoFJXkhiyC8p5eb9sgk5lJekqi6BcScIlH5Tz8jhJB+VKcrwkg3JetpdcUM7LbpIKypWku2SC9nXc6NSMHpSP8OIaNShXkvhGC8qVpB+DB+VK0q9Bg3Il6d9gQbmSDGOQoJyXw+k1KFeS4fUW1Dkn4n9JctNLUM7L8UQNypVkfNGCciVJQ5SgfISXjs5BuZKkpXVQzss0tQrKeZmuo4NyJUnbUUE5L9MXFNR7L+I4mCkIOgXFGMbMxcFX6FzN8fOTnxh0RHM1D/7ag0G10tBKd7ohGo74g6emRgG4bTozjvKybXirAPxlHffK3G0b/q0A/FDWZWk9o+bKeouyLksA36vFankD4HJt1+WHjuykNO2OWV3bdQngcrFa3sx268j1+dUFgBcAngE4G/E+KdwtgDcAXm1fmJhxv5SFa4swDCoMgwrDoMIwqDAMKgyDCsOgwjCoMAwqDIMK8y94lMqpy3RA6gAAAABJRU5ErkJggg==",
                "ipad-2-mini": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMjcvMTS1hFZGAAAED0lEQVR4nO3dvW7bVhjG8YdHIqnBvYGOKYQiU+4iSIB0T6+gmdIiBrwnowEn8JgrSPa06HV0LAR7zBVoEM9nh0pAUNSHRxS/zqvnN1MWgT8oPZYtsAghgORQU58A9YtBhWFQYRhUGAYVhkGFYVBhGFQYBhWGQYVhUGEYVBgGFYZBhWFQYRhUGAYVhkGFYVBhGFQYBhWGQYVhUGEYVJhl6oFX68sLAL8C+BnAj8c8ljqxAP4G8AnA7fXmZpvyoCLlP+ev1pdrAH9Wi+qHsiihCoUCxUlnS3EBAT54mGCgnb4D8Px6c7Npe1xr0P2V+Ve9qB/Vqu7pdOkYjW/QuOYewJO2KzXlPfRNtagYc0K1qlEtqkcA3rQdm/I++LIsyugBjW+gvU48PfpWqUqs1Kr9uKKEhn4J4F3suJSga1XEL2TtNV7/8Rvqi/YTo3+FEGC0xu3TD0lB9w3WbcelBF2mDKD6YoXVdwyawloLay2qqkbq1zn3DVp78VePEYUQYIyB936w52DQkTjnYK1NviK7YtARGGPgnBvluRh0QN57GGMGvyq/xaADOQyfsTFoz8YYPjEM2qOxhk8Mg/ZkzOETw6AnmmL4xDDoCaYaPjEM2sHUwyeGQY/knIMxZurTeBCDHmEuwyeGQRPMbfjEMGiLOQ6fGAZ9wJyHTwyD/o+5D58YBv2PHIZPDIPu5TR8YhgU+Q2fmLMOmuvwiTnboDkPn5izDJr78Ik5q6A5DB8PD+stlmoJ1eHbnmfz/VBrLbTWs46pvcbWbL/u3O7j1my/dvl6ifigIQRorbNYsfuAL643N68AvOgSVPRLrtThEyM2aI7Dp1IVdm73+9X68guAnypVHf0zxAXNYfg8pFIVlmr5vfX2l66jSFRQCZ/4KCh0uTIPRASV+IlPV9kHPcfhE5Nt0BACrLXZDZ+hZRk05+EztOyCShg+Q8omKIdPmiyCcvikm3VQDp/jzTYoh083swzK4dPdrIIe/tTFq7K72QTl8OnH5EH560i/Jg3K4dO/yYLm+AfoHIwelMNnWKMG5fAZ3ihBOXzGM3hQDp9xDRqUw2d8gwTl8JlO70H5Oey0egt6uCo5fKaV8p+8NqD9pdMw5qD2DVpf+lKu0I0P/vGiWDx4QKlK3D79wPfMDkoVv8nRgQ8eAFrvfZYS9LMJ5m0s6Eqtkm4mQ92ZYADgc9txKS+577XT941vTj4p6qbxDbTT9wDetx3bGnR/N7xnjWvudn4HFxxS3lPpNAEBLjjs/A6Na+4APEu5h2jS/UMB3hB2AsPdEJbyIf4r+eeGQYVhUGEYVBgGFYZBhWFQYRhUGAYVhkGFYVBhGFQYBhWGQYVhUGEYVBgGFYZBhWFQYRhUGAYVhkGFYVBhGFSYfwDV+WJMfjTOzwAAAABJRU5ErkJggg==",
                "iphone-5s": "data:image/png;base64,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",
                "nexus_5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDUvMjcvMTS1hFZGAAAFHElEQVR4nO2dPW8cVRRAz7zxzi62SUGQqJBQxFYUIYVdUIBoIioqikRAjyJAkVba3wBGFhYVRTokQkMFFEj8gdgCRBksuUNCKEiBYJGd3XmPYjfRMOsd71fmfd2jdbHj4t7Zo/vm3mtLmxhjEMJB2U5AWC8bthMA6Hd7HWAX6AKXgOeBZ4CLwAVgC3gKaAMtYHNNoUfAaeXav8AA+Gfy+/vAX6Wf34E/gN+AE+Bk73g/X1M+K5PYPHL73d5bwA3glVSlbYVCJQqFIkkSEpJxkiSMX6X3a8Awfe8Gw/hlHr8vX9NojBlf00ajjdbAr8Ad4Afg273j/ftrSXAJrAntd3ufbqiNm5nKSJN0bZKa5pHYwhQUpmCoh/eAN/aO93+0kY8Vof1u72qq0u83001vRc4i1zkPi4d/A6/vHe//1HR8W03Rx5nKgpMJkKmMTtq5AHzd7/a2m47fuNB+t/dqqtKXW0mrkXgGw0APeDB6wEAPznxurptMZWRp9gLw/hMPVsFGhb7TlEwYH4GXr13hxjcfcPnaFXLdTEM6uce3GwlWwobQNzdUc9NSrnN2ru+ydXGLneu7jQlNkxTgpUaClbAh9DnVYNhMZRzdPuT0z1OObh+Sqayx2NB8k+DEYuFJkqmMX776maMv74yfbc0KbZzghSYktFWbtmrbTqURZJcbGCI0MKweuQM9aKzrbIqWatFRHWvxrQrNdc6H392kvW3vA1gXWmuGw5zPrh7EKxSgvd2h87T/QgeDAardwfY/DMgzdA0URWFd5CNE6IoYYxiNRrbTeIwIXZHRaORMdYIIXQljDEVR2E7jf4jQFRgOh7ZTmEKELklRFGitbacxhQhdEpcaoTIidAlca4TKiNAFcW1MqSJCF8RlmSBCF0Jr7dyYUkWELoCLY0oVETonLu1r6xChc+B6I1RGhM6By2NKFRF6Di7ua+sQoefgQyNURoTW4Oq+tg4RWoMvjVAZEToDnxqhMiL0DHwaU6qI0DPwVSaI0Cl82NfWIUIr+DamVBGhJXzZ19YhQif43AiVEaETfB1TqohQ/G+EyohQ/B5TqkQv1Md9bR3RCw2pOiFyoaE0QmWiFRrKmFIlWqEhyoRIhYY0plSJUqjv+9o6ohMaYiNUJiqhoTZCZaISGrpMiEhoyI1QmWiExlCdEInQ0Pa1dUQhNJbqhAiEhj6mVAlaaAxjSpWghYa8EZpFsEK11tE0QmWCFRpjdUKgQmNrhMoEJzTGRqhMcEJjlgmBCY1lX1tHUEJjr04ISGhM+9o6ghEq1TkmCKExjylVvBca+5hSxXuhsW6EZuG10Fj3tXV4LVSqcxpvhUojdDZeCpVGaDZeChWZs/FOqOxr6/FOqFRnPV4JlX3t+XglVKrzfLwRKmPKfHghVMaU+fFCqGyE5sd5odIILYbzQuWoXQynhUojtDjOCpVGaDmcFSoyl8NJobKvXR4nhUp1Lo9zQmVMWQ3nhEp1roZTQofDoYwpK+KMUN++eNVVnBEq+9r1sGEzeEu1+OS1j4I6ZluqZTW+VaEd1aGjOjZTCA5njlxhPYjQwBChgSFCA0OEBoYIDQwRGhg2hIazRTifxu/VhtC7hQl/Zzu5x7tNx7Uh9NZQh7+3ndzjrabj2lj9HeQ6f3FkRu9lKiNNUpIkQXn+ONfo8V+MTEGuc7TRnwMHTeeR2FqM97u9HeBdYBe4BDwLJFaSWR0D3ANOgEPgi73j/SMbiVgTKjwZ/D7nhCn+A1MDcNI3h+7BAAAAAElFTkSuQmCC"
            }
        },

        mapDevices: function () {

            if (!this._devicesMap) {
                this._devicesMap = this.enum.devices;
                this._devicesMap["samsung-GT-I9300"] = this._devicesMap["galaxy-s5"];
                this._devicesMap["Apple-iPhone"] = this._devicesMap["iphone-5s"];


            }
        },

        super: function (methodName, args) {
            BaseView.prototype[methodName].apply(this, args);
        },

        initialize: function (options) {

            this.mapDevices();
            this.model = new DevicesCollection();
            this.super("initialize", [options]);

        },

        render: function (options) {
            var me = this,
                data;

            this.super("render", [options]);

            // Fetch Apps collection
            data = this.model.fetch({
                success: function (data) {

                    var petekCompile = _.template(petekTemplate),
                        out = "",
                        appsData = (data ? data.toJSON() : undefined),
                        contentElt, ptakim, counter, isHover = false;

                    function _getIconName(deviceData) {
                        var name;

                        if (me._devicesMap && deviceData && deviceData.manufacturer && deviceData.model) {
                            name = me._devicesMap[[deviceData.manufacturer, deviceData.model].join("-")];
                        }

                        return name;
                    }

                    function _getDeviceTypeIcon(deviceData) {
                        var type,
                            out;
                        if (deviceData && deviceData.osType) {
                            type = deviceData.osType.toLowerCase();
                            out = ["<div class='", type, "-device' ></div>"].join("");
                        }
                        return out;
                    }

                    function _petekHover(petek) {

                        petek.addClass("petek-selected");
                        console.log(petek.css("top"));
                        if (isNaN(parseInt(petek.css("top"))) || parseInt(petek.css("top")) === 0) {
                                petek.animate({
                                    top: -80

                                }, 350, function () {
                            });
                        }

                    }

                    function _petekOut(petek) {

                        petek.addClass("petek-selected");
                        if (parseInt(petek.css("top")) < 0) {
                            petek.animate({
                                top: 0

                            }, 350, function () {
                                // Animation complete.

                            });
                        }

                    }

                    function _petekSelected(petek) {

                        petek.addClass("petek-selected");
                        petek.animate({
                            top: -80

                        }, 700, function () {

                            petek.animate({
                                top: 0

                            }, 300, function () {
                                // Animation complete.
                                hp4mui.navigate("#page/3/1");
                            });

                            /*
                             // TODO: transitionOut should contain this kind of transition. We need to caluculate the in too.
                             var innercounter = innerptakim.size();
                             innerptakim.each(function () {

                             var item = $(this).find(".petek");

                             item.animate({
                             top: ((-80 ) - (( 1000 + innercounter) * innercounter))

                             }, 1000, function () {
                             // Animation complete.


                             hp4mui.navigate("#page/2/1");
                             });

                             innercounter--;

                             //hp4mui.navigate("#page/2/1");
                             });
                             */
                        });


                    }

                    if (appsData) {
                        appsData.forEach(function (deviceData) {

                            out += petekCompile({
                                "icon": _getIconName(deviceData),
                                title: (deviceData.model || "NA"),
                                description: deviceData.osType,
                                version: _getDeviceTypeIcon(deviceData),
                                navigateto: "#page/3/1"
                            });

                        });

                        contentElt = $(me.el).find("#page #content").html(out);

                        if (contentElt) {
                            ptakim = contentElt.children();
                            if (ptakim) {

                                counter = 0;
                                ptakim.each(function () {

                                    var petekclick = $(this),
                                        petek = $(this).find(".petek");

                                    // TODO: First Petek should contain a different listener for creating new app
                                    if (counter > 0) {

                                        petekclick.on("click", function(){_petekSelected(petek)});
                                        //petekclick.on("mouseover", function(){_petekHover(petek)});
                                        //petekclick.on("mouseout", function(){_petekOut(petek)});
                                    }

                                    counter++;
                                });
                            }
                        }
                    }
                },

                error: function (err) {
                    console.error(err);

                }
            }).complete(function () {

                });


            return this;
        },

        transitionIn: function (writecallback, callback) {

            this.super("transitionIn", [writecallback, callback]);

        },

        transitionOut: function (writecallback, callback) {

            this.super("transitionOut", [writecallback, callback]);

        }

    });

    return Page2View;
});
